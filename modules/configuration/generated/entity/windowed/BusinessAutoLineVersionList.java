package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoLine.eti;BusinessAutoLine.eix;BusinessAutoLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessAutoLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.BusinessAutoLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BACost> BACostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessAutoCond> BALineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessAutoCov> BALineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessAutoExcl> BALineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAModifier> BAModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CommercialDriver> DriversAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAJurisdiction> JurisdictionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessVehicle> VehiclesAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToBACosts(entity.BACost bean);
  
  
  void addToBALineConditions(entity.BusinessAutoCond bean);
  
  
  void addToBALineCoverages(entity.BusinessAutoCov bean);
  
  
  void addToBALineExclusions(entity.BusinessAutoExcl bean);
  
  
  void addToBAModifiers(entity.BAModifier bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToDrivers(entity.CommercialDriver bean);
  
  
  void addToJurisdictions(entity.BAJurisdiction bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  void addToVehicles(entity.BusinessVehicle bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.BusinessAutoLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BACostVersionList> getBACosts();
  
  
  java.util.List<? extends entity.windowed.BusinessAutoCondVersionList> getBALineConditions();
  
  
  java.util.List<? extends entity.windowed.BusinessAutoCovVersionList> getBALineCoverages();
  
  
  java.util.List<? extends entity.windowed.BusinessAutoExclVersionList> getBALineExclusions();
  
  
  java.util.List<? extends entity.windowed.BAModifierVersionList> getBAModifiers();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.CommercialDriverVersionList> getDrivers();
  
  
  java.util.List<? extends entity.windowed.BAJurisdictionVersionList> getJurisdictions();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  java.util.List<? extends entity.windowed.BusinessVehicleVersionList> getVehicles();
  
  
  
}