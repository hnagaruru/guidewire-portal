package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPAddnlInsuredCost.eti;BOPAddnlInsuredCost.eix;BOPAddnlInsuredCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPAddnlInsuredCostVersionList extends entity.windowed.BOPGeneralPremiumVersionList {
  entity.BOPAddnlInsuredCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BOPTransaction bean);
  
  
  java.util.List<? extends entity.BOPAddnlInsuredCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions();
  
  
  
}