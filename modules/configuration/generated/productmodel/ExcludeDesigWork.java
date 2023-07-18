package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDesigWork extends entity.GeneralLiabilityExcl {
  protected ExcludeDesigWork()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDesigWork(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDesigWork");
  }
  
  public ExcludeDesigWork(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDesigWork");
  }
  
  public productmodel.GenericExcludedWorkType getExcludedWorkTerm() {
    return (productmodel.GenericExcludedWorkType)getCovTerm("ExcludedWork");
  }
  
  public boolean getHasExcludedWorkTerm() {
    return hasCovTerm("ExcludedWork");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDesigWorkInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDesigWork>() {
      public productmodel.ExcludeDesigWork newEmptyInstance() {
        return new productmodel.ExcludeDesigWork();
      }
      
      
    });
  }
}