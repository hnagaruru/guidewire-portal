package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityLine.eti;GeneralLiabilityLine.eix;GeneralLiabilityLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GeneralLiabilityLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.GeneralLiabilityLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLExposure> ExposuresAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLCost> GLCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GeneralLiabilityCond> GLLineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GeneralLiabilityCov> GLLineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GeneralLiabilityExcl> GLLineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLModifier> GLModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToExposures(entity.GLExposure bean);
  
  
  void addToGLCosts(entity.GLCost bean);
  
  
  void addToGLLineConditions(entity.GeneralLiabilityCond bean);
  
  
  void addToGLLineCoverages(entity.GeneralLiabilityCov bean);
  
  
  void addToGLLineExclusions(entity.GeneralLiabilityExcl bean);
  
  
  void addToGLModifiers(entity.GLModifier bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.GeneralLiabilityLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.GLExposureVersionList> getExposures();
  
  
  java.util.List<? extends entity.windowed.GLCostVersionList> getGLCosts();
  
  
  java.util.List<? extends entity.windowed.GeneralLiabilityCondVersionList> getGLLineConditions();
  
  
  java.util.List<? extends entity.windowed.GeneralLiabilityCovVersionList> getGLLineCoverages();
  
  
  java.util.List<? extends entity.windowed.GeneralLiabilityExclVersionList> getGLLineExclusions();
  
  
  java.util.List<? extends entity.windowed.GLModifierVersionList> getGLModifiers();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  
}