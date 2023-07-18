package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPharmacistCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPharmacistCov extends entity.BusinessOwnersCov {
  protected BOPPharmacistCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPPharmacistCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPPharmacistCov");
  }
  
  public BOPPharmacistCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPharmacistCov");
  }
  
  public productmodel.DirectBOPPhamacistSalesType getBOPPhamacistSalesTerm() {
    return (productmodel.DirectBOPPhamacistSalesType)getCovTerm("BOPPhamacistSales");
  }
  
  public boolean getHasBOPPhamacistSalesTerm() {
    return hasCovTerm("BOPPhamacistSales");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPharmacistCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPharmacistCov>() {
      public productmodel.BOPPharmacistCov newEmptyInstance() {
        return new productmodel.BOPPharmacistCov();
      }
      
      
    });
  }
}