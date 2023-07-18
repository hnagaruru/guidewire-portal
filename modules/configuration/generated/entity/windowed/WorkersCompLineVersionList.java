package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompLine.eti;WorkersCompLine.eix;WorkersCompLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WorkersCompLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.WorkersCompLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.InclusionPerson> InclusionPersonsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCJurisdiction> JurisdictionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCParticipatingPlan> ParticipatingPlanArrayAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLaborClient> PolicyLaborClientsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLaborContractor> PolicyLaborContractorsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyOwnerOfficer> PolicyOwnerOfficersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCRetrospectiveRatingPlan> RetrospectiveRatingPlanArrayAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCAircraftSeat> WCAircraftSeatsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCCost> WCCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCCoveredEmployeeBase> WCCoveredEmployeeBasesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCCoveredEmployee> WCCoveredEmployeesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCExcludedWorkplace> WCExcludedWorkplacesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCFedCoveredEmployee> WCFedCoveredEmployeesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WorkersCompCond> WCLineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WorkersCompCov> WCLineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WorkersCompExcl> WCLineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCWaiverOfSubro> WCWaiverOfSubrosAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToInclusionPersons(entity.InclusionPerson bean);
  
  
  void addToJurisdictions(entity.WCJurisdiction bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  void addToParticipatingPlanArray(entity.WCParticipatingPlan bean);
  
  
  void addToPolicyLaborClients(entity.PolicyLaborClient bean);
  
  
  void addToPolicyLaborContractors(entity.PolicyLaborContractor bean);
  
  
  void addToPolicyOwnerOfficers(entity.PolicyOwnerOfficer bean);
  
  
  void addToRetrospectiveRatingPlanArray(entity.WCRetrospectiveRatingPlan bean);
  
  
  void addToWCAircraftSeats(entity.WCAircraftSeat bean);
  
  
  void addToWCCosts(entity.WCCost bean);
  
  
  void addToWCCoveredEmployeeBases(entity.WCCoveredEmployeeBase bean);
  
  
  void addToWCCoveredEmployees(entity.WCCoveredEmployee bean);
  
  
  void addToWCExcludedWorkplaces(entity.WCExcludedWorkplace bean);
  
  
  void addToWCFedCoveredEmployees(entity.WCFedCoveredEmployee bean);
  
  
  void addToWCLineConditions(entity.WorkersCompCond bean);
  
  
  void addToWCLineCoverages(entity.WorkersCompCov bean);
  
  
  void addToWCLineExclusions(entity.WorkersCompExcl bean);
  
  
  void addToWCWaiverOfSubros(entity.WCWaiverOfSubro bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.WorkersCompLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.InclusionPersonVersionList> getInclusionPersons();
  
  
  java.util.List<? extends entity.windowed.WCJurisdictionVersionList> getJurisdictions();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  java.util.List<? extends entity.windowed.WCParticipatingPlanVersionList> getParticipatingPlanArray();
  
  
  java.util.List<? extends entity.windowed.PolicyLaborClientVersionList> getPolicyLaborClients();
  
  
  java.util.List<? extends entity.windowed.PolicyLaborContractorVersionList> getPolicyLaborContractors();
  
  
  java.util.List<? extends entity.windowed.PolicyOwnerOfficerVersionList> getPolicyOwnerOfficers();
  
  
  java.util.List<? extends entity.windowed.WCRetrospectiveRatingPlanVersionList> getRetrospectiveRatingPlanArray();
  
  
  java.util.List<? extends entity.windowed.WCAircraftSeatVersionList> getWCAircraftSeats();
  
  
  java.util.List<? extends entity.windowed.WCCostVersionList> getWCCosts();
  
  
  java.util.List<? extends entity.windowed.WCCoveredEmployeeBaseVersionList> getWCCoveredEmployeeBases();
  
  
  java.util.List<? extends entity.windowed.WCCoveredEmployeeVersionList> getWCCoveredEmployees();
  
  
  java.util.List<? extends entity.windowed.WCExcludedWorkplaceVersionList> getWCExcludedWorkplaces();
  
  
  java.util.List<? extends entity.windowed.WCFedCoveredEmployeeVersionList> getWCFedCoveredEmployees();
  
  
  java.util.List<? extends entity.windowed.WorkersCompCondVersionList> getWCLineConditions();
  
  
  java.util.List<? extends entity.windowed.WorkersCompCovVersionList> getWCLineCoverages();
  
  
  java.util.List<? extends entity.windowed.WorkersCompExclVersionList> getWCLineExclusions();
  
  
  java.util.List<? extends entity.windowed.WCWaiverOfSubroVersionList> getWCWaiverOfSubros();
  
  
  
}