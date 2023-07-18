package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDTransaction.eti;APDTransaction.eix;APDTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDTransaction> getAllVersions();
  
  
  
}