package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PATransaction.eti;PATransaction.eix;PATransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PATransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PATransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PATransaction> getAllVersions();
  
  
  
}