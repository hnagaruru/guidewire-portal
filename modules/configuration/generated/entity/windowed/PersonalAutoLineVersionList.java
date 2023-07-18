package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoLine.eti;PersonalAutoLine.eix;PersonalAutoLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PersonalAutoLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.PersonalAutoLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PACost> PACostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalAutoCond> PALineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalAutoCov> PALineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalAutoExcl> PALineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PAModifier> PAModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyDriverMVR> PolicyDriverMVRsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyDriver> PolicyDriversAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalVehicle> VehiclesAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  void addToPACosts(entity.PACost bean);
  
  
  void addToPALineConditions(entity.PersonalAutoCond bean);
  
  
  void addToPALineCoverages(entity.PersonalAutoCov bean);
  
  
  void addToPALineExclusions(entity.PersonalAutoExcl bean);
  
  
  void addToPAModifiers(entity.PAModifier bean);
  
  
  void addToPolicyDriverMVRs(entity.PolicyDriverMVR bean);
  
  
  void addToPolicyDrivers(entity.PolicyDriver bean);
  
  
  void addToVehicles(entity.PersonalVehicle bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.PersonalAutoLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  java.util.List<? extends entity.windowed.PACostVersionList> getPACosts();
  
  
  java.util.List<? extends entity.windowed.PersonalAutoCondVersionList> getPALineConditions();
  
  
  java.util.List<? extends entity.windowed.PersonalAutoCovVersionList> getPALineCoverages();
  
  
  java.util.List<? extends entity.windowed.PersonalAutoExclVersionList> getPALineExclusions();
  
  
  java.util.List<? extends entity.windowed.PAModifierVersionList> getPAModifiers();
  
  
  java.util.List<? extends entity.windowed.PolicyDriverMVRVersionList> getPolicyDriverMVRs();
  
  
  java.util.List<? extends entity.windowed.PolicyDriverVersionList> getPolicyDrivers();
  
  
  java.util.List<? extends entity.windowed.PersonalVehicleVersionList> getVehicles();
  
  
  
}