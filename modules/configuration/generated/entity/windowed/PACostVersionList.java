package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PACost.eti;PACost.eix;PACost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PACostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PACost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.PATransaction bean);
  
  
  java.util.List<? extends entity.PACost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions();
  
  
  
}