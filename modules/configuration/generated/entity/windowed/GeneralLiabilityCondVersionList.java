package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityCond.eti;GeneralLiabilityCond.eix;GeneralLiabilityCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GeneralLiabilityCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GeneralLiabilityCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GeneralLiabilityCond> getAllVersions();
  
  
  
}