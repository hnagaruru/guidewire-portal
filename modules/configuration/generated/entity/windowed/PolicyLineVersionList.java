package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLine.eti;PolicyLine.eix;PolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyLineVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.PolicyLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.PolicyLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  
}