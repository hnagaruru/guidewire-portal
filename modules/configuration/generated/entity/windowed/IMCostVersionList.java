package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMCost.eti;IMCost.eix;IMCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMCostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.IMTransaction bean);
  
  
  java.util.List<? extends entity.IMCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions();
  
  
  
}