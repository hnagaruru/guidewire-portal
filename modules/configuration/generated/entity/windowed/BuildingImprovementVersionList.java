package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BuildingImprovement.eti;BuildingImprovement.eix;BuildingImprovement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BuildingImprovementVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BuildingImprovement AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BuildingImprovement> getAllVersions();
  
  
  
}