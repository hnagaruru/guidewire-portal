package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDManualPolicyLine.eti;APDManualPolicyLine.eix;APDManualPolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDManualPolicyLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.APDCost> APDCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.APDManualPolicyLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskCoverable> RiskCoverablesAsOf(java.util.Date date);
  
  
  void addToAPDCosts(entity.APDCost bean);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  void addToRiskCoverables(entity.APDRiskCoverable bean);
  
  
  java.util.List<? extends entity.windowed.APDCostVersionList> getAPDCosts();
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.APDManualPolicyLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  java.util.List<? extends entity.windowed.APDRiskCoverableVersionList> getRiskCoverables();
  
  
  
}