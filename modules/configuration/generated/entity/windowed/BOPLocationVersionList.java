package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocation.eti;BOPLocation.eix;BOPLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPLocationVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPLocation AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPBuilding> BuildingsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPLocationCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPLocationAnswer> LocationAnswersAsOf(java.util.Date date);
  
  
  void addToBuildings(entity.BOPBuilding bean);
  
  
  void addToCoverages(entity.BOPLocationCov bean);
  
  
  void addToLocationAnswers(entity.BOPLocationAnswer bean);
  
  
  java.util.List<? extends entity.BOPLocation> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPBuildingVersionList> getBuildings();
  
  
  java.util.List<? extends entity.windowed.BOPLocationCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.BOPLocationAnswerVersionList> getLocationAnswers();
  
  
  
}