package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingCond.eti;HOPDwellingCond.eix;HOPDwellingCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellingCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingCond> getAllVersions();
  
  
  
}