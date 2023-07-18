package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompCond.eti;WorkersCompCond.eix;WorkersCompCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WorkersCompCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WorkersCompCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WorkersCompCond> getAllVersions();
  
  
  
}