package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BATransaction.eti;BATransaction.eix;BATransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BATransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BATransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BATransaction> getAllVersions();
  
  
  
}