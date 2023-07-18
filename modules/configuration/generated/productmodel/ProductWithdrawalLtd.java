package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ProductWithdrawalLtd.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ProductWithdrawalLtd extends entity.GeneralLiabilityCov {
  protected ProductWithdrawalLtd()  {
    super((java.lang.Void)null);
  }
  
  public ProductWithdrawalLtd(entity.PolicyPeriod branch)  {
    super(branch, "ProductWithdrawalLtd");
  }
  
  public ProductWithdrawalLtd(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ProductWithdrawalLtd");
  }
  
  public boolean getHasProdWithdrawAggTerm() {
    return hasCovTerm("ProdWithdrawAgg");
  }
  
  public boolean getHasProductWithdrawCutOffDateTerm() {
    return hasCovTerm("ProductWithdrawCutOffDate");
  }
  
  public boolean getHasProductWithdrawDeductTerm() {
    return hasCovTerm("ProductWithdrawDeduct");
  }
  
  public boolean getHasProductWithdrawPercentTerm() {
    return hasCovTerm("ProductWithdrawPercent");
  }
  
  public productmodel.OptionProdWithdrawAggType getProdWithdrawAggTerm() {
    return (productmodel.OptionProdWithdrawAggType)getCovTerm("ProdWithdrawAgg");
  }
  
  public productmodel.GenericProductWithdrawCutOffDateType getProductWithdrawCutOffDateTerm() {
    return (productmodel.GenericProductWithdrawCutOffDateType)getCovTerm("ProductWithdrawCutOffDate");
  }
  
  public productmodel.OptionProductWithdrawDeductType getProductWithdrawDeductTerm() {
    return (productmodel.OptionProductWithdrawDeductType)getCovTerm("ProductWithdrawDeduct");
  }
  
  public productmodel.OptionProductWithdrawPercentType getProductWithdrawPercentTerm() {
    return (productmodel.OptionProductWithdrawPercentType)getCovTerm("ProductWithdrawPercent");
  }
  
  static {
    com.guidewire._generated.productmodel.ProductWithdrawalLtdInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ProductWithdrawalLtd>() {
      public productmodel.ProductWithdrawalLtd newEmptyInstance() {
        return new productmodel.ProductWithdrawalLtd();
      }
      
      
    });
  }
}