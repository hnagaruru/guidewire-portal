package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DwellingHazard.eti;DwellingHazard.eix;DwellingHazard.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface DwellingHazardVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.DwellingHazard AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DwellingHazard> getAllVersions();
  
  
  
}