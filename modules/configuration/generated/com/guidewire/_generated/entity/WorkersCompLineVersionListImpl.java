package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompLine.eti;WorkersCompLine.eix;WorkersCompLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WorkersCompLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WorkersCompLineVersionList {
  public WorkersCompLineVersionListImpl(entity.WorkersCompLine base)  {
    super(base);
  }
  
  public WorkersCompLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.WorkersCompLine AsOf(java.util.Date date) {
    return (entity.WorkersCompLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.InclusionPerson> InclusionPersonsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.INCLUSIONPERSONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCJurisdiction> JurisdictionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.JURISDICTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCParticipatingPlan> ParticipatingPlanArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.PARTICIPATINGPLANARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLaborClient> PolicyLaborClientsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.POLICYLABORCLIENTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLaborContractor> PolicyLaborContractorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.POLICYLABORCONTRACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyOwnerOfficer> PolicyOwnerOfficersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.POLICYOWNEROFFICERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCRetrospectiveRatingPlan> RetrospectiveRatingPlanArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.RETROSPECTIVERATINGPLANARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCAircraftSeat> WCAircraftSeatsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCAIRCRAFTSEATS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCost> WCCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCoveredEmployeeBase> WCCoveredEmployeeBasesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCCOVEREDEMPLOYEEBASES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCoveredEmployee> WCCoveredEmployeesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCCOVEREDEMPLOYEES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCExcludedWorkplace> WCExcludedWorkplacesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCEXCLUDEDWORKPLACES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCFedCoveredEmployee> WCFedCoveredEmployeesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCFEDCOVEREDEMPLOYEES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WorkersCompCond> WCLineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCLINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WorkersCompCov> WCLineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCLINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WorkersCompExcl> WCLineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCLINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCWaiverOfSubro> WCWaiverOfSubrosAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WorkersCompLine.WCWAIVEROFSUBROS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.WorkersCompLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.WorkersCompLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.WorkersCompLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToInclusionPersons(entity.InclusionPerson bean) {
    addToArray(entity.WorkersCompLine.INCLUSIONPERSONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToJurisdictions(entity.WCJurisdiction bean) {
    addToArray(entity.WorkersCompLine.JURISDICTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.WorkersCompLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToParticipatingPlanArray(entity.WCParticipatingPlan bean) {
    addToArray(entity.WorkersCompLine.PARTICIPATINGPLANARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyLaborClients(entity.PolicyLaborClient bean) {
    addToArray(entity.WorkersCompLine.POLICYLABORCLIENTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyLaborContractors(entity.PolicyLaborContractor bean) {
    addToArray(entity.WorkersCompLine.POLICYLABORCONTRACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyOwnerOfficers(entity.PolicyOwnerOfficer bean) {
    addToArray(entity.WorkersCompLine.POLICYOWNEROFFICERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRetrospectiveRatingPlanArray(entity.WCRetrospectiveRatingPlan bean) {
    addToArray(entity.WorkersCompLine.RETROSPECTIVERATINGPLANARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCAircraftSeats(entity.WCAircraftSeat bean) {
    addToArray(entity.WorkersCompLine.WCAIRCRAFTSEATS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCCosts(entity.WCCost bean) {
    addToArray(entity.WorkersCompLine.WCCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCCoveredEmployeeBases(entity.WCCoveredEmployeeBase bean) {
    addToArray(entity.WorkersCompLine.WCCOVEREDEMPLOYEEBASES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCCoveredEmployees(entity.WCCoveredEmployee bean) {
    addToArray(entity.WorkersCompLine.WCCOVEREDEMPLOYEES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCExcludedWorkplaces(entity.WCExcludedWorkplace bean) {
    addToArray(entity.WorkersCompLine.WCEXCLUDEDWORKPLACES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCFedCoveredEmployees(entity.WCFedCoveredEmployee bean) {
    addToArray(entity.WorkersCompLine.WCFEDCOVEREDEMPLOYEES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCLineConditions(entity.WorkersCompCond bean) {
    addToArray(entity.WorkersCompLine.WCLINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCLineCoverages(entity.WorkersCompCov bean) {
    addToArray(entity.WorkersCompLine.WCLINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCLineExclusions(entity.WorkersCompExcl bean) {
    addToArray(entity.WorkersCompLine.WCLINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCWaiverOfSubros(entity.WCWaiverOfSubro bean) {
    addToArray(entity.WorkersCompLine.WCWAIVEROFSUBROS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.WorkersCompLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WorkersCompLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.WorkersCompLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.WorkersCompLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.InclusionPersonVersionList> getInclusionPersons() {
    return (java.util.List)getArray(entity.WorkersCompLine.INCLUSIONPERSONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCJurisdictionVersionList> getJurisdictions() {
    return (java.util.List)getArray(entity.WorkersCompLine.JURISDICTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.WorkersCompLine.LINEANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCParticipatingPlanVersionList> getParticipatingPlanArray() {
    return (java.util.List)getArray(entity.WorkersCompLine.PARTICIPATINGPLANARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLaborClientVersionList> getPolicyLaborClients() {
    return (java.util.List)getArray(entity.WorkersCompLine.POLICYLABORCLIENTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLaborContractorVersionList> getPolicyLaborContractors() {
    return (java.util.List)getArray(entity.WorkersCompLine.POLICYLABORCONTRACTORS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyOwnerOfficerVersionList> getPolicyOwnerOfficers() {
    return (java.util.List)getArray(entity.WorkersCompLine.POLICYOWNEROFFICERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCRetrospectiveRatingPlanVersionList> getRetrospectiveRatingPlanArray() {
    return (java.util.List)getArray(entity.WorkersCompLine.RETROSPECTIVERATINGPLANARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCAircraftSeatVersionList> getWCAircraftSeats() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCAIRCRAFTSEATS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCCostVersionList> getWCCosts() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCCoveredEmployeeBaseVersionList> getWCCoveredEmployeeBases() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCCOVEREDEMPLOYEEBASES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCCoveredEmployeeVersionList> getWCCoveredEmployees() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCCOVEREDEMPLOYEES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCExcludedWorkplaceVersionList> getWCExcludedWorkplaces() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCEXCLUDEDWORKPLACES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCFedCoveredEmployeeVersionList> getWCFedCoveredEmployees() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCFEDCOVEREDEMPLOYEES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WorkersCompCondVersionList> getWCLineConditions() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCLINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WorkersCompCovVersionList> getWCLineCoverages() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCLINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WorkersCompExclVersionList> getWCLineExclusions() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCLINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCWaiverOfSubroVersionList> getWCWaiverOfSubros() {
    return (java.util.List)getArray(entity.WorkersCompLine.WCWAIVEROFSUBROS_PROP.get());
  }
  
  
}