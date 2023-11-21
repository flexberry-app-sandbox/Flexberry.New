package New.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import New.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Подразделения
 */
@Entity(name = "IISNewПодразделения")
@Table(schema = "public", name = "Подразделения")
public class Podrazdeleniya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDподразделения")
    private Integer idподразделения;

    @Column(name = "Наименование")
    private Integer наименование;


    public Podrazdeleniya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDподразделения() {
      return idподразделения;
    }

    public void setIDподразделения(Integer idподразделения) {
      this.idподразделения = idподразделения;
    }

    public Integer getНаименование() {
      return наименование;
    }

    public void setНаименование(Integer наименование) {
      this.наименование = наименование;
    }


}