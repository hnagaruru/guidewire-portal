package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleExclItem.eti;GLLineScheduleExclItem.eix;GLLineScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLLineScheduleExclItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLLineScheduleExclItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLLineScheduleExclItem> getAllVersions();
  
  
  
}