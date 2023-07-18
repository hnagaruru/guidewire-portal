package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingRF.eti;HOPDwellingRF.eix;HOPDwellingRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellingRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingRF> getAllVersions();
  
  
  
}