package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPLocationCov.eti;CPLocationCov.eix;CPLocationCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPLocationCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPLocationCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPLocationCov> getAllVersions();
  
  
  
}