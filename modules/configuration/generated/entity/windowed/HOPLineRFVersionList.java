package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineRF.eti;HOPLineRF.eix;HOPLineRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineRF> getAllVersions();
  
  
  
}