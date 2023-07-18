package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDDataField.eti;APDDataField.eix;APDDataField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDDataFieldVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDDataField AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDDataField> getAllVersions();
  
  
  
}