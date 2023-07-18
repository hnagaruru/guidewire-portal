package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigProfService.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDesigProfService extends entity.GeneralLiabilityExcl {
  protected ExcludeDesigProfService()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDesigProfService(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDesigProfService");
  }
  
  public ExcludeDesigProfService(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDesigProfService");
  }
  
  public productmodel.GenericExcludedServiceType getExcludedServiceTerm() {
    return (productmodel.GenericExcludedServiceType)getCovTerm("ExcludedService");
  }
  
  public boolean getHasExcludedServiceTerm() {
    return hasCovTerm("ExcludedService");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDesigProfServiceInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDesigProfService>() {
      public productmodel.ExcludeDesigProfService newEmptyInstance() {
        return new productmodel.ExcludeDesigProfService();
      }
      
      
    });
  }
}