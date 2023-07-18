package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBlanketCov.eti;CPBlanketCov.eix;CPBlanketCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBlanketCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPBlanketCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBlanketCov> getAllVersions();
  
  
  
}