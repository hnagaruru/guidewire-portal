package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAMultiPolicyDiscCost.eti;PAMultiPolicyDiscCost.eix;PAMultiPolicyDiscCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAMultiPolicyDiscCostVersionList extends entity.windowed.PAGeneralPremiumVersionList {
  entity.PAMultiPolicyDiscCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.PATransaction bean);
  
  
  java.util.List<? extends entity.PAMultiPolicyDiscCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions();
  
  
  
}