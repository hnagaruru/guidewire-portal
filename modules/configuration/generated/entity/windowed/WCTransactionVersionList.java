package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCTransaction.eti;WCTransaction.eix;WCTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCTransaction> getAllVersions();
  
  
  
}