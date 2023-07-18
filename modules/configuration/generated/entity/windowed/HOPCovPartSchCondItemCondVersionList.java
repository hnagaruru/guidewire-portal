package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCondItemCond.eti;HOPCovPartSchCondItemCond.eix;HOPCovPartSchCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCovPartSchCondItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCovPartSchCondItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCovPartSchCondItemCond> getAllVersions();
  
  
  
}