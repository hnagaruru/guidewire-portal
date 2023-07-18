package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigOperations.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDesigOperations extends entity.GeneralLiabilityExcl {
  protected ExcludeDesigOperations()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDesigOperations(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDesigOperations");
  }
  
  public ExcludeDesigOperations(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDesigOperations");
  }
  
  public productmodel.GenericDesigLocationType getDesigLocationTerm() {
    return (productmodel.GenericDesigLocationType)getCovTerm("DesigLocation");
  }
  
  public productmodel.GenericExcludedOpType getExcludedOpTerm() {
    return (productmodel.GenericExcludedOpType)getCovTerm("ExcludedOp");
  }
  
  public boolean getHasDesigLocationTerm() {
    return hasCovTerm("DesigLocation");
  }
  
  public boolean getHasExcludedOpTerm() {
    return hasCovTerm("ExcludedOp");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDesigOperationsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDesigOperations>() {
      public productmodel.ExcludeDesigOperations newEmptyInstance() {
        return new productmodel.ExcludeDesigOperations();
      }
      
      
    });
  }
}