package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InlandMarineLine.eti;InlandMarineLine.eix;InlandMarineLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface InlandMarineLineVersionList extends entity.windowed.PolicyLineVersionList {
  java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date);
  
  
  entity.InlandMarineLine AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMCost> IMCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMCoveragePart> IMCoveragePartsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMLocation> IMLocationsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date);
  
  
  void addToAdditionalInsureds(entity.PolicyAddlInsured bean);
  
  
  void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean);
  
  
  void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean);
  
  
  void addToIMCosts(entity.IMCost bean);
  
  
  void addToIMCoverageParts(entity.IMCoveragePart bean);
  
  
  void addToIMLocations(entity.IMLocation bean);
  
  
  void addToLineAnswers(entity.PolicyLineAnswer bean);
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds();
  
  
  java.util.List<? extends entity.InlandMarineLine> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups();
  
  
  java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets();
  
  
  java.util.List<? extends entity.windowed.IMCostVersionList> getIMCosts();
  
  
  java.util.List<? extends entity.windowed.IMCoveragePartVersionList> getIMCoverageParts();
  
  
  java.util.List<? extends entity.windowed.IMLocationVersionList> getIMLocations();
  
  
  java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers();
  
  
  
}