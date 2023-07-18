package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessOwnersLine.eti;BusinessOwnersLine.eix;BusinessOwnersLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessOwnersLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.BusinessOwnersLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPCost> BOPCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessOwnersCond> BOPLineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessOwnersCov> BOPLineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessOwnersExcl> BOPLineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPLocation> BOPLocationsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPModifier> BOPModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPScheduledEquipment> BOPScheduledEquipmentsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToBOPCosts(entity.BOPCost bean);
  
  
  void addToBOPLineConditions(entity.BusinessOwnersCond bean);
  
  
  void addToBOPLineCoverages(entity.BusinessOwnersCov bean);
  
  
  void addToBOPLineExclusions(entity.BusinessOwnersExcl bean);
  
  
  void addToBOPLocations(entity.BOPLocation bean);
  
  
  void addToBOPModifiers(entity.BOPModifier bean);
  
  
  void addToBOPScheduledEquipments(entity.BOPScheduledEquipment bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.BusinessOwnersLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPCostVersionList> getBOPCosts();
  
  
  java.util.List<? extends entity.windowed.BusinessOwnersCondVersionList> getBOPLineConditions();
  
  
  java.util.List<? extends entity.windowed.BusinessOwnersCovVersionList> getBOPLineCoverages();
  
  
  java.util.List<? extends entity.windowed.BusinessOwnersExclVersionList> getBOPLineExclusions();
  
  
  java.util.List<? extends entity.windowed.BOPLocationVersionList> getBOPLocations();
  
  
  java.util.List<? extends entity.windowed.BOPModifierVersionList> getBOPModifiers();
  
  
  java.util.List<? extends entity.windowed.BOPScheduledEquipmentVersionList> getBOPScheduledEquipments();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  
}