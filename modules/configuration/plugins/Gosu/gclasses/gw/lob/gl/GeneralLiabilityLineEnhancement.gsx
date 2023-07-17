package gw.lob.gl
uses gw.api.domain.Schedule
uses gw.lob.gl.schedule.GLScheduleHelper

uses java.lang.Integer
uses java.util.List

enhancement GeneralLiabilityLineEnhancement : GeneralLiabilityLine
{
  property get GLExposuresWM(): GLExposure[] {
    var exposures = this.VersionList.Exposures.map( \ g -> g.AllVersions.first() )
    return exposures.toTypedArray()
  }
  
  property get AllGLExposuresWM() : List<entity.GLExposure> {
    return this.VersionList.Exposures.flatMap(\e -> e.AllVersions)
  }
  
  function addExposureWM() : GLExposure {
    var eu = new GLExposure(this.Branch)
    eu.GLLine = this
    return eu.VersionList.AllVersions.single()
  }

  function getAdditionalCoverageCategories() : String[] {
    return new String[]{"GLPollutionAll",
                        "GLLiquorAll",
                        "GLContractualAll",
                        "GLOther",
                        "GLEmployment",
                        "GLY2K",
                        "GLDesignated", 
                        "GLClaimsMade",
                        "GLProfessionalEO"}
  }
  
  function addExposureWM(location : PolicyLocation, classCode : GLClassCode, basis : Integer) : GLExposure{
    var newExposure = this.addExposureWM()
    newExposure.LocationWM = location.Unsliced
    newExposure.ClassCode = classCode
    newExposure.BasisAmount = basis
    return newExposure
  }

  property get GLTransactions() : GLTransaction[] {
    var branch = this.Branch
    return branch.getSlice(branch.PeriodStart).GLTransactions
  }

  /**
   * An array of schedule coverages with cov terms on the line.
   */
  property get GLScheduleCovsWithCovTerms() : Schedule[] {
    return GLScheduleHelper.filterScheduleCovsWithCovTerms(this.CoveragesFromCoverable)
  }
  
  /**
   * An array of coverages and schedule coverages with no cov terms on the line
   */
  property get GLLineCoveragesAndScheduleCovsWithNoCovTerms() : Coverage[] {
    return GLScheduleHelper.filterCoveragesAndScheduleCovsWithNoCovTerms(this.CoveragesFromCoverable)
  }

  /**
   * Returns a map of State to an array of GLExposures sorted by class code and then effective date
   */
  property get ExposuresByState() : java.util.Map<State, GLExposure[]> {
    return this.VersionList.Exposures
        .flatMap( \ g -> g.AllVersions )
        .partition( \ g -> g.Location.State )
        .mapValues( \ i -> i.orderBy( \ g -> g.ClassCode.Code ).thenBy(\g -> g.EffectiveDate).toTypedArray() )
  }
}

