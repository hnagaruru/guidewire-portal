package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/IMLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class IMLine extends entity.InlandMarineLine {
  protected IMLine()  {
    super((java.lang.Void)null);
  }
  
  public IMLine(entity.PolicyPeriod branch)  {
    super(branch, "IMLine");
  }
  
  public IMLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "IMLine");
  }
  
  static {
    com.guidewire._generated.productmodel.IMLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.IMLine>() {
      public productmodel.IMLine newEmptyInstance() {
        return new productmodel.IMLine();
      }
      
      
    });
  }
}