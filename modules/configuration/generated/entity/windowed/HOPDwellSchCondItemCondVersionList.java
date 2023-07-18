package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchCondItemCond.eti;HOPDwellSchCondItemCond.eix;HOPDwellSchCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellSchCondItemCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellSchCondItemCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellSchCondItemCond> getAllVersions();
  
  
  
}