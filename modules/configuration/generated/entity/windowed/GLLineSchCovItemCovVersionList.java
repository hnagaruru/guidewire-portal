package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineSchCovItemCov.eti;GLLineSchCovItemCov.eix;GLLineSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLLineSchCovItemCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLLineSchCovItemCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLLineSchCovItemCov> getAllVersions();
  
  
  
}