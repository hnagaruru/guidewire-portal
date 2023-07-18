package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TerritoryCode.eti;TerritoryCode.eix;TerritoryCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface TerritoryCodeVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.TerritoryCode AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.TerritoryCode> getAllVersions();
  
  
  
}