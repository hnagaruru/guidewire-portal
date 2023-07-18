package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoCond.eti;BusinessAutoCond.eix;BusinessAutoCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessAutoCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BusinessAutoCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessAutoCond> getAllVersions();
  
  
  
}