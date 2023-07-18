package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLine.eti;HOPLine.eix;HOPLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.HOPLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCost> HOPCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePart> HOPCoveragePartsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineCond> HOPLineConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineCov> HOPLineCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineExcl> HOPLineExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineMod> HOPLineModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToHOPCosts(entity.HOPCost bean);
  
  
  void addToHOPCoverageParts(entity.HOPCoveragePart bean);
  
  
  void addToHOPLineConditions(entity.HOPLineCond bean);
  
  
  void addToHOPLineCoverages(entity.HOPLineCov bean);
  
  
  void addToHOPLineExclusions(entity.HOPLineExcl bean);
  
  
  void addToHOPLineModifiers(entity.HOPLineMod bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.HOPLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.HOPCostVersionList> getHOPCosts();
  
  
  java.util.List<? extends entity.windowed.HOPCoveragePartVersionList> getHOPCoverageParts();
  
  
  java.util.List<? extends entity.windowed.HOPLineCondVersionList> getHOPLineConditions();
  
  
  java.util.List<? extends entity.windowed.HOPLineCovVersionList> getHOPLineCoverages();
  
  
  java.util.List<? extends entity.windowed.HOPLineExclVersionList> getHOPLineExclusions();
  
  
  java.util.List<? extends entity.windowed.HOPLineModVersionList> getHOPLineModifiers();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  
}