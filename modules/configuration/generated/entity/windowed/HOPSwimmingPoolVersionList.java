package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPSwimmingPool.eti;HOPSwimmingPool.eix;HOPSwimmingPool.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPSwimmingPoolVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPSwimmingPool AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPSwimmingPool> getAllVersions();
  
  
  
}