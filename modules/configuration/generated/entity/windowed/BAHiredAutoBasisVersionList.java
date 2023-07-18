package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAHiredAutoBasis.eti;BAHiredAutoBasis.eix;BAHiredAutoBasis.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAHiredAutoBasisVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BAHiredAutoBasis AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAHiredAutoBasis> getAllVersions();
  
  
  
}