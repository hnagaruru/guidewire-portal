package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Reinsurable.eti;Reinsurable.eix;Reinsurable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ReinsurableVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.Reinsurable AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.Reinsurable> getAllVersions();
  
  
  
}