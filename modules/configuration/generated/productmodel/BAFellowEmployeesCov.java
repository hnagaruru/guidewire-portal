package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAFellowEmployeesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAFellowEmployeesCov extends entity.BAStateCov {
  protected BAFellowEmployeesCov()  {
    super((java.lang.Void)null);
  }
  
  public BAFellowEmployeesCov(entity.PolicyPeriod branch)  {
    super(branch, "BAFellowEmployeesCov");
  }
  
  public BAFellowEmployeesCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAFellowEmployeesCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BAFellowEmployeesCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAFellowEmployeesCov>() {
      public productmodel.BAFellowEmployeesCov newEmptyInstance() {
        return new productmodel.BAFellowEmployeesCov();
      }
      
      
    });
  }
}