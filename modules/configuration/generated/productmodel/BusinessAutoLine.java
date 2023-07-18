package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/BusinessAutoLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BusinessAutoLine extends entity.BusinessAutoLine {
  protected BusinessAutoLine()  {
    super((java.lang.Void)null);
  }
  
  public BusinessAutoLine(entity.PolicyPeriod branch)  {
    super(branch, "BusinessAutoLine");
  }
  
  public BusinessAutoLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BusinessAutoLine");
  }
  
  static {
    com.guidewire._generated.productmodel.BusinessAutoLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BusinessAutoLine>() {
      public productmodel.BusinessAutoLine newEmptyInstance() {
        return new productmodel.BusinessAutoLine();
      }
      
      
    });
  }
}