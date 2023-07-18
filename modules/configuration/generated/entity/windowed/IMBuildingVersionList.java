package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMBuilding.eti;IMBuilding.eix;IMBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMBuildingVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMBuilding AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMBuilding> getAllVersions();
  
  
  
}