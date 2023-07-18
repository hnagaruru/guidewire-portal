package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLocation.eti;PolicyLocation.eix;PolicyLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyLocationVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PolicyLocation AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.Building> BuildingsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationAnswer> LocationAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationRiskAssessment> LocationRiskAssessmentsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationRisk> LocationRisksAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TerritoryCode> TerritoryCodesAsOf(java.util.Date date);
  
  
  void addToBuildings(entity.Building bean);
  
  
  void addToLocationAnswers(entity.LocationAnswer bean);
  
  
  void addToLocationNamedInsureds(entity.LocationNamedInsured bean);
  
  
  void addToLocationRiskAssessments(entity.LocationRiskAssessment bean);
  
  
  void addToLocationRisks(entity.LocationRisk bean);
  
  
  void addToTerritoryCodes(entity.TerritoryCode bean);
  
  
  java.util.List<? extends entity.PolicyLocation> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BuildingVersionList> getBuildings();
  
  
  java.util.List<? extends entity.windowed.LocationAnswerVersionList> getLocationAnswers();
  
  
  java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds();
  
  
  java.util.List<? extends entity.windowed.LocationRiskAssessmentVersionList> getLocationRiskAssessments();
  
  
  java.util.List<? extends entity.windowed.LocationRiskVersionList> getLocationRisks();
  
  
  java.util.List<? extends entity.windowed.TerritoryCodeVersionList> getTerritoryCodes();
  
  
  
}