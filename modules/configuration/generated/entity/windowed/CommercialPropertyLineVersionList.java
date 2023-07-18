package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyLine.eti;CommercialPropertyLine.eix;CommercialPropertyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CommercialPropertyLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.CommercialPropertyLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBlanket> CPBlanketsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPCost> CPCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CommercialPropertyCond> CPLineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CommercialPropertyCov> CPLineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CommercialPropertyExcl> CPLineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPLocation> CPLocationsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPModifier> CPModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCPBlankets(entity.CPBlanket bean);
  
  
  void addToCPCosts(entity.CPCost bean);
  
  
  void addToCPLineConditions(entity.CommercialPropertyCond bean);
  
  
  void addToCPLineCoverages(entity.CommercialPropertyCov bean);
  
  
  void addToCPLineExclusions(entity.CommercialPropertyExcl bean);
  
  
  void addToCPLocations(entity.CPLocation bean);
  
  
  void addToCPModifiers(entity.CPModifier bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.CommercialPropertyLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPBlanketVersionList> getCPBlankets();
  
  
  java.util.List<? extends entity.windowed.CPCostVersionList> getCPCosts();
  
  
  java.util.List<? extends entity.windowed.CommercialPropertyCondVersionList> getCPLineConditions();
  
  
  java.util.List<? extends entity.windowed.CommercialPropertyCovVersionList> getCPLineCoverages();
  
  
  java.util.List<? extends entity.windowed.CommercialPropertyExclVersionList> getCPLineExclusions();
  
  
  java.util.List<? extends entity.windowed.CPLocationVersionList> getCPLocations();
  
  
  java.util.List<? extends entity.windowed.CPModifierVersionList> getCPModifiers();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  
}