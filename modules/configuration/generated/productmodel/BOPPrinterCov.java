package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPrinterCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPrinterCov extends entity.BusinessOwnersCov {
  protected BOPPrinterCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPPrinterCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPPrinterCov");
  }
  
  public BOPPrinterCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPrinterCov");
  }
  
  public productmodel.DirectBOPPrinterSalesType getBOPPrinterSalesTerm() {
    return (productmodel.DirectBOPPrinterSalesType)getCovTerm("BOPPrinterSales");
  }
  
  public boolean getHasBOPPrinterSalesTerm() {
    return hasCovTerm("BOPPrinterSales");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPrinterCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPrinterCov>() {
      public productmodel.BOPPrinterCov newEmptyInstance() {
        return new productmodel.BOPPrinterCov();
      }
      
      
    });
  }
}