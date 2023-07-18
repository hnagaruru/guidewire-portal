package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DwellingAnimal.eti;DwellingAnimal.eix;DwellingAnimal.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface DwellingAnimalVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.DwellingAnimal AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DwellingAnimal> getAllVersions();
  
  
  
}