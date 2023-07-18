package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineCond.eti;HOPLineCond.eix;HOPLineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineCond> getAllVersions();
  
  
  
}