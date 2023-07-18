package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "APDRiskCoverable.eti;APDRiskCoverable.eix;APDRiskCoverable.etx")
enhancement GWAPDRiskCoverableEntityEnhancement : entity.APDRiskCoverable {
  function addSplitDate (date :  java.util.Date) : void {
    (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.apd.APDSplittableRisk") as gw.lob.apd.APDSplittableRisk).addSplitDate(date)
  }
  
  function canSplitOnDate (date :  java.util.Date) : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.apd.APDSplittableRisk") as gw.lob.apd.APDSplittableRisk).canSplitOnDate(date)
  }
  
  property get SplitDates () : java.util.List<java.util.Date> {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.apd.APDSplittableRisk") as gw.lob.apd.APDSplittableRisk).SplitDates
  }
  
  property get SplittableFields () : gw.lob.apd.APDFieldAccessor[] {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.lob.apd.APDSplittableRisk") as gw.lob.apd.APDSplittableRisk).SplittableFields
  }
  
  
}